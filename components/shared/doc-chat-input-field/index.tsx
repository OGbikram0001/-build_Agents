import React from 'react';
import AiChatIcon from '@/components/icons/ai-chat-icon';

interface DocChatInputFieldProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  value: string;
}

const DocChatInputField: React.FC<DocChatInputFieldProps> = ({ onChange, onClick, value }) => {
  return (
    <div className="flex items-center p-4 bg-white border-t border-gray-200">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Build workflow from a plan..."
          className="w-full p-2 pr-10 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          onChange={onChange}
          value={value}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={onClick}
        >
          <AiChatIcon />
        </button>
      </div>
    </div>
  );
};

export default DocChatInputField;
