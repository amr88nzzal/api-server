'use strict';

class Collection {
  constructor(model) {
      this.model = model;
  }
  //---------------------------------
  async create(obj) {
    try {
      let newRecord = await this.model.create(obj);
      console.log('--------------');
      return newRecord;
    }
    catch (err) { console.error('Error In Creating Model',this.model.name); }
  }

  //--------------------------------
  async read(id) {
    try {
      let record;
      if (id) {
        record = await this.model.findOne({ where: { id } })
        return record;
      }
      record = await this.model.findAll()
      return record;
    }
    catch (err) { console.log('Error In Reading Model',this.model.name); }
  }
  //--------------------------------
  async update(id,obj) {
    try {
      let record = await this.model.findOne({ where: { id } })
      let updateRecord = await record.update(obj);
      return updateRecord;
    }
    catch (err) { console.log('Error In Updating Model',this.model.name, `id:${id}`); }
  }


  //--------------------------------
  async delete(id) {
    try {
      let record = await this.model.destroy({ where: { id } })
      return record;
    }
    catch (err) { console.log('Error In Deleting Model'); }
  }
}

module.exports = Collection;

//   async read(id) {
//       let record;
//       try {
//               record = await this.model.findAll();
//           return record;
//       } catch(e) {
//           console.error('error in reading record/s for model',this.model.name)
//       }

//   }
//   async readOne(id){
//       try {
//           let record = await this.model.findOne({where: {id:id}})
//           return record;
//       } catch (error) {
//           console.error('error in readingOne record/s for model',this.model.name)
//       }
//   }

//   async update(id,obj) {
//       try {
//           let recordId = await this.model.findOne({where:{id:id}})
//           let updateRecord = await recordId.update(obj);
//           return updateRecord;
//       } catch(e) {
//           console.error('error in updating record for model',this.model.name, `id:${id}`)
//       }
//   }

//   async delete(id) {
//       try{
//           let deletedRecord = await this.model.destroy({where:{id:id}});
//           return deletedRecord;
//       } catch(e) {
//           console.error('error in deleting record for model',this.model.name, `id:${id}`)
//       }
//   }

// }

// module.exports = Collection;