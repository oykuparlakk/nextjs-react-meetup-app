import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png"
        title="A first meetup"
        address="Adress sdfkdsljfkldsjfkdsjfjsdkflsdfk"
        description="The meetup description"
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
        params: {
          meetupId: "m2",
        },
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //

  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A first meetup",
        address: "adres deneme deneme",
        description: "The meetup description",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png",
      },
    },
  };
}

export default MeetupDetails;
