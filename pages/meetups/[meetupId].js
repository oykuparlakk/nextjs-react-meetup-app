// pages/meetups/[meetupId].js
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

let client;

function MeetupDetails(props) {
  return (
    <>
      <MeetupDetail
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  client = await MongoClient.connect(
    "mongodb+srv://oykuparlak:a4UfQQzS0FB9zw0O@cluster0.vmxa0mz.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  client = await MongoClient.connect(
    "mongodb+srv://oykuparlak:a4UfQQzS0FB9zw0O@cluster0.vmxa0mz.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      id: selectedMeetup._id.toString(),
      image: selectedMeetup.image,
      title: selectedMeetup.title,
      address: selectedMeetup.address,
      description: selectedMeetup.description,
    },
  };
}

export default MeetupDetails;
