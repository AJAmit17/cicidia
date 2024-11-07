import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ModalProps = {
    open: boolean;
    onClose: () => void;
    className?: string;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, className, children }) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={` bg-background p-6 rounded-lg shadow-lg ${className}`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;