import Tour from "../database/models/User";
import BaseRepository from "./BaseRepository";

export default class TourRepository extends BaseRepository<TourAttributes> {
  constructor() {
    super(Tour);
  }
}
