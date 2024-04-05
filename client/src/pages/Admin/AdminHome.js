import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome<i className="text-success">{user?.name}</i>
          </h1>
          <h3>Give Blood, Save Lives: Be a Hero Today! </h3>
          <hr />
          <p>
            Blood donation is a selfless act that saves lives and sustains communities worldwide.
           Each donation provides hope to those in need, whether during medical emergencies, surgeries, or chronic illnesses.
           Beyond its immediate impact, blood donation fosters unity, bringing together diverse individuals bound by a common goal:
            to support one another in times of vulnerability. It is a testament to human kindness and solidarity, transcending borders
           and backgrounds. Donors contribute not just blood, but also compassion and empathy, embodying the essence of humanity's interconnectedness.
            Through this act of giving, individuals become integral parts of a collective effort to uphold the sanctity of life.
            The impact of a single donation reverberates through hospitals, providing critical support in moments of desperation.
    Moreover, blood donation fosters a sense of community and altruism, inspiring individuals to give back and support their fellow human beings.
         It's a tangible way to make a difference, transcending borders and uniting people under the banner of compassion.
           Every drop donated serves as a beacon of hope, symbolizing the power of collective action in saving lives.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
