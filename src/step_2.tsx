import { GLITTR_API, NETWORK, WALLET_API, API_KEY } from "./constants";
import { useLaserEyes } from "@glittr-sdk/lasereyes";
import { CreateContractForm } from "./components/CreateContractForm";
import { GlittrSDK } from "@glittr-sdk/sdk";

const client = new GlittrSDK({
  network: NETWORK!,
  electrumApi: WALLET_API!,
  glittrApi: GLITTR_API!,
  apiKey: API_KEY,
});

export default function Mint() {
    const { connected } =
      useLaserEyes();
 return (
    <div className="z-10 min-h-screen p-8 mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Contract List */}
        <div className="flex-grow">
          {connected && <CreateContractForm client={client}/>}
            <div className="space-y-2">
              <div className="h-px bg-gray-700/30 -mx-2 my-6"></div>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-700/30 self-stretch"></div>

        {/* Right side - Asset Component */}
        <div className="md:w-[300px] shrink-0">
        </div>
      </div>

  );
}