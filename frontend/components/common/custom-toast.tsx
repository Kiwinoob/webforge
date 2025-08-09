// utils/customToast.tsx
import { toast } from "sonner";
import { CheckCircle, XCircle, AlertCircle, Info } from "lucide-react";

interface CustomToastProps {
  message: string;
  description?: string;
}

export const customToast = {
  success: ({ message, description }: CustomToastProps) => {
    return toast.custom((t) => (
      // Use items-center for vertical alignment
      <div className="flex items-center p-4 bg-neutral-900 border border-green-500 rounded-lg shadow-lg max-w-md">
        <div className="flex-shrink-0 mr-3">
          {/* Apply color class directly to the icon */}
          <CheckCircle className="w-6 h-6 text-green-500" />
        </div>
        <div className="flex-1">
          <div className="text-white font-medium text-sm">{message}</div>
          {description && (
            <div className="text-neutral-300 text-xs mt-1">{description}</div>
          )}
        </div>
        <button
          onClick={() => toast.dismiss(t)}
          className="flex-shrink-0 ml-3 text-neutral-400 hover:text-white transition-colors"
        >
          <XCircle className="w-4 h-4" />
        </button>
      </div>
    ));
  },

  error: ({ message, description }: CustomToastProps) => {
    return toast.custom((t) => (
      // Use items-center for vertical alignment
      <div className="flex items-center p-4 bg-neutral-900 border border-grey-500 rounded-lg shadow-lg max-w-md">
        <div className="flex-shrink-0 mr-3">
          {/* Apply color class directly to the icon */}
          <XCircle className="w-6 h-6 text-red-500" />
        </div>
        <div className="flex-1">
          <div className="text-white font-medium text-sm">{message}</div>
          {description && (
            <div className="text-neutral-300 text-xs mt-1">{description}</div>
          )}
        </div>
        <button
          onClick={() => toast.dismiss(t)}
          className="flex-shrink-0 ml-3 text-neutral-400 hover:text-white transition-colors"
        >
          <XCircle className="w-4 h-4" />
        </button>
      </div>
    ));
  },

  info: ({ message, description }: CustomToastProps) => {
    return toast.custom((t) => (
      // Use items-center for vertical alignment
      <div className="flex items-center p-4 bg-neutral-900 border border-blue-500 rounded-lg shadow-lg max-w-md">
        <div className="flex-shrink-0 mr-3">
          {/* Apply color class directly to the icon */}
          <Info className="w-6 h-6 text-blue-500" />
        </div>
        <div className="flex-1">
          <div className="text-white font-medium text-sm">{message}</div>
          {description && (
            <div className="text-neutral-300 text-xs mt-1">{description}</div>
          )}
        </div>
        <button
          onClick={() => toast.dismiss(t)}
          className="flex-shrink-0 ml-3 text-neutral-400 hover:text-white transition-colors"
        >
          <XCircle className="w-4 h-4" />
        </button>
      </div>
    ));
  },

  warning: ({ message, description }: CustomToastProps) => {
    return toast.custom((t) => (
      // Use items-center for vertical alignment
      <div className="flex items-center p-4 bg-neutral-900 border border-yellow-500 rounded-lg shadow-lg max-w-md">
        <div className="flex-shrink-0 mr-3">
          {/* Apply color class directly to the icon */}
          <AlertCircle className="w-6 h-6 text-yellow-500" />
        </div>
        <div className="flex-1">
          <div className="text-white font-medium text-sm">{message}</div>
          {description && (
            <div className="text-neutral-300 text-xs mt-1">{description}</div>
          )}
        </div>
        <button
          onClick={() => toast.dismiss(t)}
          className="flex-shrink-0 ml-3 text-neutral-400 hover:text-white transition-colors"
        >
          <XCircle className="w-4 h-4" />
        </button>
      </div>
    ));
  },

  // Themed version with the same fixes
  themed: {
    success: ({ message, description }: CustomToastProps) => {
      return toast.custom((t) => (
        // Use items-center for vertical alignment
        <div className="flex items-center p-4 bg-gradient-to-r from-neutral-900 to-neutral-800 border border-grey-600 rounded-lg shadow-xl max-w-md backdrop-blur-sm">
          <div className="flex-shrink-0 mr-3">
            {/* The colored circle provides the background, the icon itself is white */}
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-white font-semibold text-sm">{message}</div>
            {description && (
              <div className="text-neutral-300 text-xs mt-1">{description}</div>
            )}
          </div>
          <button
            onClick={() => toast.dismiss(t)}
            className="flex-shrink-0 ml-3 text-neutral-400 hover:text-red-400 transition-colors"
          >
            ×
          </button>
        </div>
      ));
    },

    error: ({ message, description }: CustomToastProps) => {
      return toast.custom((t) => (
        // Use items-center for vertical alignment
        <div className="flex items-center p-4 bg-gradient-to-r from-neutral-900 to-neutral-800 border border-grey-600 rounded-lg shadow-xl max-w-md backdrop-blur-sm">
          <div className="flex-shrink-0 mr-3">
            {/* The colored circle provides the background, the icon itself is white */}
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <XCircle className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-white font-semibold text-sm">{message}</div>
            {description && (
              <div className="text-neutral-300 text-xs mt-1">{description}</div>
            )}
          </div>
          <button
            onClick={() => toast.dismiss(t)}
            className="flex-shrink-0 ml-3 text-neutral-400 hover:text-orange-400 transition-colors"
          >
            ×
          </button>
        </div>
      ));
    },

    info: ({ message, description }: CustomToastProps) => {
      return toast.custom((t) => (
        // Use items-center for vertical alignment
        <div className="flex items-center p-4 bg-gradient-to-r from-neutral-900 to-neutral-800 border border-grey-600 rounded-lg shadow-xl max-w-md backdrop-blur-sm">
          <div className="flex-shrink-0 mr-3">
            {/* The colored circle provides the background, the icon itself is white */}
            <div className="w-6 h-6 bg-neutral-500 rounded-full flex items-center justify-center">
              <Info className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-white font-semibold text-sm">{message}</div>
            {description && (
              <div className="text-neutral-300 text-xs mt-1">{description}</div>
            )}
          </div>
          <button
            onClick={() => toast.dismiss(t)}
            className="flex-shrink-0 ml-3 text-neutral-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
      ));
    },
  },
};
