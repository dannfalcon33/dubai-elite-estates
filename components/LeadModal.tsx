import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import { MODAL_CONTENT } from "../constants";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investmentAmount: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-900/40 backdrop-blur-md border border-zinc-700/50 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <div className="p-8 md:p-10 overflow-y-auto flex-1">
                <h3 className="text-3xl font-serif text-amber-500 mb-2">
                  {MODAL_CONTENT.form.title}
                </h3>
                <p className="text-zinc-400 mb-8 font-light text-sm tracking-wide">
                  {MODAL_CONTENT.form.subtitle}
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                        {MODAL_CONTENT.form.labels.firstName}
                      </label>
                      <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/50 border border-zinc-700 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm font-light place-self-stretch"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                        {MODAL_CONTENT.form.labels.lastName}
                      </label>
                      <input
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/50 border border-zinc-700 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm font-light"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                      {MODAL_CONTENT.form.labels.email}
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/50 border border-zinc-700 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm font-light"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                      {MODAL_CONTENT.form.labels.phone}
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/50 border border-zinc-700 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm font-light"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                      {MODAL_CONTENT.form.labels.investment}
                    </label>
                    <select
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/50 border border-zinc-700 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm font-light appearance-none"
                    >
                      <option value="" className="bg-zinc-900 text-zinc-500">
                        Select Range
                      </option>
                      <option value="1m-5m" className="bg-zinc-900">
                        $1M - $5M
                      </option>
                      <option value="5m-15m" className="bg-zinc-900">
                        $5M - $15M
                      </option>
                      <option value="15m+" className="bg-zinc-900">
                        $15M+
                      </option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                      {MODAL_CONTENT.form.labels.message}
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/50 border border-zinc-700 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none text-sm font-light"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full group relative px-8 py-4 bg-transparent border border-amber-500/50 text-white overflow-hidden transition-all hover:border-amber-500 mt-6"
                  >
                    <span className="absolute inset-0 w-0 bg-amber-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></span>
                    <span className="relative flex justify-center items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold">
                      {MODAL_CONTENT.form.submit}{" "}
                      <ArrowRight
                        size={14}
                        className="text-amber-500 group-hover:text-white transition-colors"
                      />
                    </span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-12 text-center h-[500px] flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(217,119,6,0.3)]"
                >
                  <CheckCircle size={32} className="text-white" />
                </motion.div>
                <h3 className="text-3xl font-serif text-white mb-4">
                  {MODAL_CONTENT.success.title}
                </h3>
                <p className="text-zinc-400 mb-10 leading-relaxed font-light text-sm max-w-xs mx-auto">
                  {MODAL_CONTENT.success.message}
                </p>
                <button
                  onClick={handleClose}
                  className="px-8 py-3 border border-zinc-700 text-zinc-300 hover:text-white hover:border-white transition-colors text-xs uppercase tracking-widest"
                >
                  {MODAL_CONTENT.success.button}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;
