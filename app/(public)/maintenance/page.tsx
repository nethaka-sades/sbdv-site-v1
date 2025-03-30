import { Button } from "@/components/ui/button";

export default function Maintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-6 p-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Under Maintenance
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          We&apos;re performing some scheduled maintenance. We&apos;ll be back online shortly. Thank you for your patience!
        </p>
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => window.location.reload()}
        >
          Check Status
        </Button>
      </div>
    </div>
  );
}