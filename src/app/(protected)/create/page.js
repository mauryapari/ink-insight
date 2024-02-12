import BasicEditor from "@/components/editor";

export default async function create() {

  return (
    <main className="container mx-auto my-28">
      <p className="text-md my-4 italic">
        <strong className="text-red-600 mr-4">Note:</strong> Select text to see
        Toolbar options.
      </p>
      <div>
        {/* TODO: FIx this */}
        <BasicEditor blog={{}}/>
      </div>
    </main>
  );
}
