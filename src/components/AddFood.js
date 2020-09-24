import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

/* actions */
import { searchActionCreators } from "../redux/actions/searchActions";

// styles
import { Contain } from "../styles/global/structure";
import { HeadThree, HeadFour, Paragraph } from "../styles/global/type";
import { TextInput, Button, FormLabel } from "../styles/global/forms";

export default function AddFood() {
  /* bring in redux dispatch and config */
  const dispatch = useDispatch();

  /* action creators */
  const submitMissing = searchActionCreators.submitMissing;

  /* useHistory from react-router-dom configuration */
  const history = useHistory();

  /* grab not found food item from params */
  const params = useParams();

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      name: params.food,
    },
  });

  const onSubmit = (data) => {
    dispatch(submitMissing(data, (path) => history.push(path)));
  };

  return (
    <Contain width="80%">
      <HeadThree
        color="#444444"
        fontSize="3rem"
        fontWeight="900"
        margin="2rem 0 2rem 0"
      >
        Submit Food to Our Database
      </HeadThree>

      <Paragraph fontSize="1.8rem" margin="0 0 2rem 0" lineHeight="2.4rem">
        There is <strong>A LOT</strong> of food and snacks that our pups can get
        into or that they can be given. Because of this, it's virtually
        impossible for us to compile a complete list of <strong>all</strong>{" "}
        food in the world. However, with dedicated research and help from the
        community, we can compile as complete of a list to be used as a resource
        and references as possible.
      </Paragraph>

      <Paragraph fontSize="1.8rem" margin="0 0 2rem 0" lineHeight="2.4rem">
        That's where you come in! It's as simple as entering in the food or
        snack that you want to add to our collection, and then select whether or
        not it is safe or not for our furry companions to eat.
      </Paragraph>

      <Paragraph fontSize="1.8rem" margin="0 0 2rem 0" lineHeight="2.4rem">
        Once we receive this information, our team will do our due dilegence to
        research that specific food or snack so we can display accurate
        information to users who may search that particular item. We greatly
        thank you for your help!
      </Paragraph>

      <form onSubmit={handleSubmit(onSubmit)}>
        <HeadFour
          color="#444444"
          fontSize="2.2rem"
          fontWeight="600"
          margin="5rem 0 0.5rem 0"
        >
          What Food do We Need to Add?
        </HeadFour>
        <TextInput
          width="70%"
          height="3.5rem"
          fontSize="1.4rem"
          type="text"
          name="name"
          placeholder="Food Name"
          ref={register({ required: true, pattern: /^[a-zA-Z0-9 ]+$/ })}
          autoComplete="off"
        />

        {errors.food && errors.food.type === "required" && (
          <p className="error">Please enter a valid food.</p>
        )}
        {errors.food && errors.food.type === "pattern" && (
          <p className="error">
            Food should only contain letters and possibly numbers.
          </p>
        )}

        <HeadFour
          color="#444444"
          fontSize="2.2rem"
          fontWeight="600"
          margin="2rem 0 1rem 0"
        >
          Is It Safe for Dogs to Consume?
        </HeadFour>
        <FormLabel fontSize="2rem">
          Yes
          <input
            type="radio"
            name="safe"
            value="true"
            ref={register({ required: true })}
          />
          <span className="checkmark"></span>
        </FormLabel>
        <FormLabel fontSize="2rem" margin="0 0 0 1rem">
          No
          <input
            type="radio"
            name="safe"
            value="false"
            ref={register({ required: true })}
          />
          <span className="checkmark"></span>
        </FormLabel>

        {errors.safe && errors.safe.type === "required" && (
          <p className="error">
            Please select yes or no for consumption safety.
          </p>
        )}

        <div className="form-controls">
          <Button
            color="#ffffff"
            bgColor="#444444"
            padding="0.5rem 1rem"
            margin="2rem 0"
            fontSize="1.8rem"
            fontWeight="300"
            borderRadius="0.5rem"
            type="submit"
          >
            Submit Food
          </Button>
        </div>
      </form>
    </Contain>
  );
}
