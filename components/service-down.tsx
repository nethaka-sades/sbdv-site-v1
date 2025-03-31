export default function ServiceDown(){
    return(
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6 p-6">
          <h1 className="text-4xl font-bold text-white">This Service is Currently Down</h1>
          <p className="text-lg text-neutral-200 max-w-md">
            Please check back later or contact support for more information.
          </p>
        </div>
      </div>
    );
}