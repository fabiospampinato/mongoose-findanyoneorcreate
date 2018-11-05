
/* FIND ANYONE OR CREATE */

function findAnyoneOrCreate ( schema ) {

  schema.statics.findAnyoneOrCreate = function findAnyoneOrCreate ( create ) {

    return this.findOneOrCreate ( {}, create );

  }

}

/* EXPORT */

export = Object.assign ( findAnyoneOrCreate, { default: findAnyoneOrCreate } );
