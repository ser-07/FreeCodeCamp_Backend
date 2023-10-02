require('dotenv').config();
let mongoose;
try {
  mongoose = require("mongoose");
} catch (e) {
  console.log(e);
}

// console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=> console.log("Connected successfully"))
        .catch((err)=> console.log('Error'));


const personSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
})


let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  let newData = new PersonModel({
    name: 'Sreejith',
    age:25,
    favoriteFoods:['Biriyani','Idli']
  });

  newData.save()
    .then((doc) => {
      done(null, doc)
      console.log(doc)
    })
    .catch((err) => { done(err); console.log(`Error: ${err}`) });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople).then((res)=> {console.log(res); done(null,res);})
                              .catch((err)=>{console.log(`Error: ${err}`); done(err)});


  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}).then((res)=> {console.log(res); done(null,res);})
  .catch((err)=>{console.log(`Error: ${err}`); done(err)});
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food }).then((res)=> {console.log(res); done(null,res);})
  .catch((err)=>{console.log(`Error: ${err}`); done(err)});
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
