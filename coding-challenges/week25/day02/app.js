const mongoose = require('mongoose');
const posts = require('./posts.json');

mongoose.connect('mongodb://127.0.0.1:27017/dataset-script', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const Post = mongoose.model(
  'Post',
  new mongoose.Schema({
    title: {
      type: String,
    },
    userId: {
      type: Number,
    },
    id: {
      type: Number,
    },
    body: {
      type: String,
    },
  })
);

const createDB = () => {
  try {
    posts.forEach(async (post) => {
      const newPost = new Post(post);
      await newPost.save();
    });
    console.log('Creation Successful');
  } catch (error) {
    console.log('Something Went Wrong', error);
  }
};

const updateDB = async () => {
  try {
    await Post.updateMany(
      { userId: 10 },
      { title: 'custom title', body: 'custom body' }
    );
    console.log('Updated Successfully');
  } catch (error) {
    console.log('Something Went Wrong', error);
  }
};

const deleteDB = async () => {
  try {
    await Post.deleteMany({ userId: 1 });
    console.log('Deleted Successfully');
  } catch (error) {
    console.log('Something Went Wrong', error);
  }
};

const logDB = async (userId) => {
  try {
    console.log(await Post.find({ userId }));
  } catch (error) {
    console.log('Something Went Wrong', error);
  }
};

const exec = async () => {
  await createDB();
  await updateDB();
  await deleteDB();
  await logDB(10);
};

exec();
