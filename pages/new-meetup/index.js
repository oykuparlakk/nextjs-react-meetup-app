import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      router.push("/");

    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
