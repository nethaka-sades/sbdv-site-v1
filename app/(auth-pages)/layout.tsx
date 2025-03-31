import ServiceDown from "@/components/service-down";

export default function Layout({ children }: { children: React.ReactNode }) {
  const lms_status = process.env.LMS_STATUS;
  return (
    <main>
      {lms_status === "true" ? (
        <div>{children}</div>
      ) : (
        <ServiceDown />
      )}
    </main>
  );
}
