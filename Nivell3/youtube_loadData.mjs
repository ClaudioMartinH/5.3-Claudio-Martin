import mongoose from "mongoose";
import data from "./youtube.json" assert { type: "json"};

const userSchema = new mongoose.Schema({
  id_user: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  birth_date: Date,
  country: String,
  postal_code: Number,
  videos_published: [String],
  channels: [String],
  subscribed_to: [String],
  videos_liked: [
    {
      video_id: { type: String, ref: "Video" },
      when_liked: Date,
    },
  ],
  videos_disliked: [
    {
      video_id: { type: String, ref: "Video" },
      when_disliked: Date,
    },
  ],
});

const videoSchema = new mongoose.Schema({
  id_video: { type: String, required: true },
  title:  { type: String, required: true },
  description:  { type: String, required: true },
  size:  { type: String, required: true },
  duration: String,
  file_name:  { type: String, required: true },
  thumbnail: String,
  times_played: Number,
  likes: [
    {
      user: { type: String, ref: "User" },
      when_liked: Date,
    },
  ],
  dislikes: [
    {
      user: { type: String, ref: "User" },
      when_disliked: Date,
    },
  ],
  video_status: { type: String, enum: ["Public", "Private", "Hidden"] },
  published_by: String,
  when_published: Date,
  tags: [String],
});

const channelSchema = new mongoose.Schema({
  id_channel: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  when_created: Date,
  videos: [String],
});

const playlistSchema = new mongoose.Schema({
  id_playlist: { type: String, required: true },
  name: { type: String, required: true },
  created: Date,
  playlist_status: { type: String, enum: ["Public", "Private"] },
  videos: [String],
});

const commentSchema = new mongoose.Schema({
  id_comment: { type: String, required: true },
  video_id: { type: String, required: true },
  user_id: { type: String, required: true },
  text_comment: String,
  when_commented: Date,
});

const User = mongoose.model('User', userSchema);
const Video = mongoose.model('Video', videoSchema);
const Channel = mongoose.model('Channel', channelSchema);
const Playlist = mongoose.model('Playlist', playlistSchema);
const Comment = mongoose.model('Comment', commentSchema);

async function loadData() {
  try {
    await mongoose.connect("mongodb://localhost:27017/youtube", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await User.insertMany(data.users);
    await Video.insertMany(data.videos);
    await Channel.insertMany(data.channels);
    await Playlist.insertMany(data.playlists);
    await Comment.insertMany(data.comments);
    await 

    console.log("Datos cargados correctamente en Base de Datos");
    
  } catch (error) {
    console.error("Error cargando los datos en la base de datos", error);    
  } finally {
    await mongoose.disconnect();
  }
}

loadData();