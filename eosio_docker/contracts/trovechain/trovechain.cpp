#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
using namespace eosio;

// Smart Contract Name: trove
class trovechain : public eosio::contract {
  private:

    /// @abi table
    struct projstruct {
      uint64_t      prim_key;       // primary key
      account_name  user;           // account name for the user
      std::string   title;          // title
      std::string   description;    // the description
      uint64_t      amount;         // the funding amount needed
      uint64_t      timestamp;      // the store the last update block time

      // primary key
      auto primary_key() const { return prim_key; }
      // secondary key: user
      account_name get_by_user() const { return user; }
    };

    // create a multi-index table and support secondary key
    typedef eosio::multi_index< N(projstruct), projstruct,
      indexed_by< N(getbyuser), const_mem_fun<projstruct, account_name, &projstruct::get_by_user> >
      > projtable;

  public:
    using contract::contract;

    /// @abi action
    void insert( account_name _user, std::string& _title, std::string& _description, uint64_t _amount) {
        // to sign the action with the given account
        require_auth(_user);

        projtable obj(_self, _self);

        // insert object
        obj.emplace( _self, [&]( auto& address ) {
          address.prim_key      = obj.available_primary_key();
          address.user          = _user;
          address.title         = _title;
          address.description   = _description;
          address.amount        = _amount;
          address.timestamp     = now();
        });
    }
};

// specify the contract name, and export a public action: insert
EOSIO_ABI( trovechain, (insert) )
