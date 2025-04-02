import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <section className="py-28">
        <div className="container">
          <div className="mb-14">
            <h1 className="mt-1 mb-3 text-3xl font-semibold text-balance md:text-4xl">
              Reach Us
            </h1>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                <Mail className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold">Email Us</p>
              <a href="#" className="hover:underline">
                abc@example.com
              </a>
            </div>
            <div>
              <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                <MapPin className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold">Visit Us</p>
              <a href="https://maps.app.goo.gl/YiJc4kU3JiYrk8Xh6" className="hover:underline">
                Bellanvila Sri Bodhiraja Dhamma School, Bellanvila Raja Maha Viharaya
              </a>
            </div>
            <div>
              <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                <Phone className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold">Call Us</p>
              <a href="#" className="hover:underline">
                +123 456 7890
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28">
        <div className="container">
          <div className="mb-14">
            <h1 className="mt-1 mb-3 text-3xl font-semibold text-balance md:text-4xl">
              Contact Our Admins
            </h1>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="mb-1 text-lg font-semibold">Nethaka De Saram</p>
              <p className="mb-1 text-muted-foreground">
                Developer and Site Admin
              </p>
              <a href="#" className="font-semibold hover:underline">
                (+94) 76 032 5065
              </a>
            </div>
            <div>
              <p className="mb-1 text-lg font-semibold">Lakwan Lonidu</p>
              <p className="mb-1 text-muted-foreground">Site Admin</p>
              <a href="#" className="font-semibold hover:underline">
                (+94) 78 257 4518
              </a>
            </div>
            <div>
              <p className="mb-1 text-lg font-semibold">Selini Dulwanya</p>
              <p className="mb-1 text-muted-foreground">Site Admin</p>
              <a href="#" className="font-semibold hover:underline">
                (+94) 76 078 3499
              </a>
            </div>
            <div>
              <p className="mb-1 text-lg font-semibold">Nadeeka Munasinghe</p>
              <p className="mb-1 text-muted-foreground">Teacher in Charge</p>
              <a href="#" className="font-semibold hover:underline">
                (+94) 77 306 2736
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { Contact };
