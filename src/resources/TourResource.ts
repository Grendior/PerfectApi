import BaseResource from "./BaseResource";

class TourResource extends BaseResource<TourAttributes, TourEntity>() {
  item() {
    const tourResource: TourEntity = {
      id: this.instance.id,
      travel_id: this.instance.travel_id,
      name: this.instance.name,
      startingDate: this.instance.startingDate,
      endingDate: this.instance.endingDate,
      price: this.instance.price,
    };

    return tourResource;
  }
}

export default TourResource;
