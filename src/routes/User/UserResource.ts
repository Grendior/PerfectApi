import User from '../../database/models/User';

class UserResource {
  #instance: User;
  constructor(user: User | null) {
    if (!user) {
      throw new Error('Entity not found');
    }
    this.#instance = user;
  }

  item() {
    const userResource: UserEntity = {
      id: this.#instance.id,
      firstName: this.#instance.firstName,
      lastName: this.#instance.lastName,
      email: this.#instance.email,
      phoneNumber: this.#instance.phoneNumber,
      createdAt: this.#instance.createdAt,
      updatedAt: this.#instance.updatedAt,
    };

    return userResource;
  }

  static collection(users: Array<User>) {
    return users.map((instance) => {
      const userResource = new UserResource(instance);
      return userResource.item();
    });
  }
}

export default UserResource;
