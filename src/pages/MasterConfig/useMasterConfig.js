import { useState, useEffect } from "react";

export const useMasterConfig = () => {
  const [master, setMaster] = useState("");
  const [masterOptions, setMasterOptions] = useState([]);

  const onMasterOptionsChange = (event) => {
    setMaster(event.target.value);
  };

  const useInitData = () => {
    const options = [
      { label: "Kompetensi", value: "kompetensi" },
      { label: "Pekerjaan Orang Tua", value: "pekerjaan_orang_tua" },
      { label: "Agama", value: "agama" },
      { label: "Level Class", value: "level_class" },
    ];

    setMasterOptions(options);
  };

  useEffect(useInitData, []);

  return {
    master,
    masterOptions,
    onMasterOptionsChange,
  };
};
