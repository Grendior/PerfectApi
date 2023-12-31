import Tour from "../database/models/User";
import Travel from "../database/models/Events";
import BaseRepository from "./BaseRepository";

export default class TravelRepository extends BaseRepository<TravelAttributes> {
  constructor() {
    super(Travel);
  }

  getAll(options: Record<string, any> = {}) {
    const opts = {
      ...options,
      ...this.getIncludes(),
    };
    return super.getAll(opts);
  }

  getById(id: string, options: Record<string, any> = {}) {
    const opts = {
      ...options,
      ...this.getIncludes(),
    };
    return super.getById(id, opts);
  }

  private getIncludes() {
    return {
      include: Tour,
    };
  }
}
