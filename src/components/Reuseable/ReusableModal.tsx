import React from 'react';

type ModalMode = 'form' | 'message';

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: ModalMode;
  title: string;
  description?: string;
  submitText?: string;
  cancleText?: string;
  array?: string[];
  fields?: {
    label: string;
    type: string;
    placeholder?: string;
    name: string;
    options?: string[];
  }[];
  onSubmit?: (formData?: { [key: string]: string }) => void;
  onCancle?: (formData?: { [key: string]: string }) => void;
  seconddescription?: string;
  
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  mode,
  title,
  description,
  fields = [],
  array = [],
  onSubmit,
  submitText = 'Submit',
  cancleText = 'Cancle',
  seconddescription,
}) => {
  const [formData, setFormData] = React.useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    onClose();
  };

  const handleMessageSubmit = () => {
    onSubmit?.();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c1c67] bg-opacity-20 flex items-center justify-center">
      <div className="bg-[#1C1C1C]  border border-gray-700 rounded-xl p-8 w-full max-w-md text-white shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
        >
          &times;
        </button>


        <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
        {description && <p className="text-sm text-gray-400 mb-6 text-center">{description}</p>}
        {array && array.length > 0 && (
  <div className="text-sm text-gray-400 mb-6 text-center flex flex-wrap gap-2 justify-center">
    {array.map((item, index) => (
      <div
        key={index}
        className={`px-3 py-2 rounded text-sm text-white ${
          index === 0 ? 'bg-[#55761C]' : 'bg-[#2E2E2E]'
        }`}
      >
        {item}
      </div>
    ))}
  </div>
)}


        {mode === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            {fields.map((field, idx) => (
              <div key={idx}>
                <label className="block mb-2 text-sm font-medium">{field.label}</label>
                {field.type === 'select' && field.options ? (
                  <select
                    name={field.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-[#2A2A2A] border border-gray-600 text-white"
                  >
                    <option value="">Select...</option>
                    {field.options.map((opt, i) => (
                      <option value={opt} key={i}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-[#2A2A2A] border border-gray-600"
                  />
                )}
              </div>
            ))}
            <div className="text-center flex gap-2 justify-center">
              <button
                type="submit"
                className="px-6 py-2 text-white rounded-lg hover:bg-[#6e9a27] transition"
              >
                {cancleText}
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#55761C] text-white rounded-lg hover:bg-[#6e9a27] transition"
              >
                {submitText}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center mt-4  gap-2 ">
            <button
              onClick={handleMessageSubmit}
              className="px-6 py-2  text-white rounded-lg hover:bg-[#6e9a27] transition"
            >
              {cancleText}
            </button>
            <button
              onClick={handleMessageSubmit}
              className="px-6 py-2 bg-[#55761C] text-white rounded-lg hover:bg-[#6e9a27] transition"
            >
              {submitText}
            </button>
          </div>
        )}

      {seconddescription && <p className="text-sm text-gray-400 mb-6 text-center mt-3">{seconddescription}</p>}
      </div>
    </div>
  );
};

export default ReusableModal;
