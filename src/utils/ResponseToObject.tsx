import { DropdownSearch } from "../interfaces/Interfaces";

const ResponseToObject = (
  data: {
    vehicleYears: number[];
    vehicleMakes: string[];
    vehicleModels: string[];
    vehicleTrims: string[];
  },
  query: string
) => {
  let objIdArr: DropdownSearch[] = [];

  switch (query) {
    case "vehicleYears":
      data.vehicleYears.map((item: number, index: number) => {
        objIdArr.push({
          id: index,
          name: item.toString(),
        });
      });

      return objIdArr;
    case "vehicleMakes":
      data.vehicleMakes.map((item: string, index: number) => {
        objIdArr.push({
          id: index,
          name: item,
        });
      });

      return objIdArr;
    case "vehicleModels":
      data.vehicleModels.map((item: string, index: number) => {
        objIdArr.push({
          id: index,
          name: item,
        });
      });

      return objIdArr;
    case "vehicleTrims":
      data.vehicleTrims.map((item: string, index: number) => {
        objIdArr.push({
          id: index,
          name: item.trim.toString(),
        });
      });

      return objIdArr;
    default:
      return null;
  }
};

export default ResponseToObject;
