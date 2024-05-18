'use client';

import Image from 'next/image';

import Modal from '@/app/components/Modal';

interface ImageModalProps {
	isOpen?: boolean;
	onClose: () => void;
	src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
	if (!src) {
		return null;
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			{/* TODO: Should fix className to w-96 h-96 */}
			<div className="w-80 h-80">
				<Image alt="Image" className="object-cover" fill src={src} />
			</div>
		</Modal>
	);
};

export default ImageModal;
