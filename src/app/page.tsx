import Image from "next/image";
import Avatar from "./propscomps/avatar";
import { Person } from "./propscomps/person";
import AvatarCard from "./propscomps/avatarCard";
import Profile from "./propscomps/profile";
import Sendmessage from "./stateAsASnapShot/sendmessage";
import Sendmessageadv from "./stateAsASnapShot/sendmessageadv";
import TrafficLight from "./stateAsASnapShot/trafficLight";
import Form from "./usestate/form";
import Formredundant from "./usestate/formredundant";
import RemoveFormRedundancy from "./usestate/removeFormRedundancy";
import SharingState from "./usestate/sharingState";
import Fullchatapp from "./chatapp/fullchatapp";
import Age from "./useReducer/aget";
import RenderingList from "./renderingListTasks/renderingList";
import RenderingListTasks from "./renderingListTasks/renderingListTasks";
import FoodRecipes from "./renderingListTasks/foodRecipes";
import Tea from "./renderingListTasks/pureCom/tea";
import Cups from "./renderingListTasks/pureCom/cups";
import ExportFunction from "./renderingListTasks/renderingList/exportFunction";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-y-8 justify-center items-center">
      <Avatar person={{ name: "Saud Ahmed", imageId: "YfeOqp2s" }} />
      <Avatar person={{ name: "Saud Ahmed", imageId: "YfeOqp2s" }} size={80} />
      <Avatar person={{ name: "Saud Ahmed", imageId: "YfeOqp2s" }} size={50} />

      <div>
        <Person name="Saud Ahmed" city="Hyderabad" />
      </div>

      <div>
        <AvatarCard person={{ name: "Saud Ahmed", imageId: "YfeOqp2s" }} />
        <AvatarCard
          person={{ name: "Saud Ahmed", imageId: "YfeOqp2s" }}
          size={80}
        />
        <AvatarCard
          person={{ name: "Saud Ahmed", imageId: "YfeOqp2s" }}
          size={50}
        />
      </div>

      <div>
        <Profile
          name={"Ayesha"}
          imageId={"YfeOqp2"}
          profession="Software Engineer"
          discovery="Medical GPT's"
          award={["Nobel Prize in Web-dev", "Davy Medal", "Matteucci Medal"]}
        />
        <Profile
          name={"Zuniraa"}
          imageId={"szV5sdG"}
          profession="Software Engineer"
          discovery="Medical GPT's"
          award={["Nobel Prize in Soft-Engr.", "Davy Medal", "Matteucci Medal"]}
        />
      </div>

      <div>
        <Sendmessage />
      </div>

      <div>
        <Sendmessageadv />
      </div>

      <div>
        <TrafficLight />
      </div>

      <div>
        <Form />
      </div>

      <div>
        <Formredundant />
      </div>

      <div>
        <RemoveFormRedundancy />
      </div>

      <div>
        <SharingState />
      </div>

      <div>
        <Fullchatapp />
      </div>

      <Age />

      <div>
        <RenderingList />
      </div>

      <div>
        <RenderingListTasks />
      </div>

      <div>
        <FoodRecipes />
      </div>

      <div>
        <ExportFunction />
      </div>

      <div>
        <Tea />
      </div>
      <div>
        <Cups />
      </div>
    </div>
  );
}
