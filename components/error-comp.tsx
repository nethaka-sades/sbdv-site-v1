export default function ErrorComp(){
    return(
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6 p-6">
          <h1 className="text-4xl font-bold text-white">Error Occured</h1>
          <p className="text-lg text-neutral-200 max-w-md">
            Please refresh the page or contact support
          </p>
        </div>
      </div>
    );
}