import {
  Resolver, Query, Arg,
} from 'type-graphql';

// Models
import { User } from '~/schema/User/User.model';
import { getAddressBook, getCurrencyInfo } from '~/utils/Coinbase/coinbase';

@Resolver(User)
export class UserQueryResolver {
  @Query(() => Boolean)
  public async getAddressBook() {
    getAddressBook();
    getCurrencyInfo();
    return true;
  }
}
