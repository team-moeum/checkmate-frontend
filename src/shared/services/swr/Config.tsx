import React from "react";
import axios from "axios";
import { SWRConfig } from "swr";
import { useDevicedId } from "../../hooks/useDeviceId";

const axiosInstance = axios.create();
const Config = ({ children }: { children: React.ReactNode }) => {
  const devicedId = useDevicedId();

  return (
    <SWRConfig
      value={{
        fetcher: async (resource: any) => {
          const response = await axiosInstance({
            ...resource,
            headers: {
              ...resource.headers,
              "x-device-key": devicedId
            }
          });
          return response.data;
        }
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default Config;
