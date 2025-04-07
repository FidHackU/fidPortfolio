import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"; // Importing icons

const Contacts = () => {
  return (
    <div id="contacts" className="px-4 pb-32">
      <h1 className="font-bold text-xs text-[#70a0dd] text-left uppercase">Contact</h1>

      <div className="font-bold text-left">
        Don&apos;t be shy! Hit me up! <span className="inline-block">👇</span>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-10 text-sm text-left">
        {/* Location */}
        <div className="flex gap-4">
          <FaMapMarkerAlt size={20} className="text-[#70a0dd] mt-1" />
          <div>
            <div className="font-bold text-left">Location</div>
            <div className="text-gray-600 text-sm">Malaysia, Sabah</div>
          </div>
        </div>

        {/* Mail */}
        <div className="flex gap-4">
          <FaEnvelope size={20} className="text-[#70a0dd] mt-1" />
          <div>
            <div className="font-bold">Mail</div>
            <div className="text-gray-600">fidelyong22@gmail.com</div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Contacts;
