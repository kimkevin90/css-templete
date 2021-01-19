import React, { useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./images/logo.png";
import imageOne from "./images/pepsi001.png";
import imageTwo from "./images/pepsi002.png";
import imageThree from "./images/pepsi003.png";
import image1 from "./images/facebook.png";
import image2 from "./images/instagram.png";
import image3 from "./images/twitter.png";
const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0062be;
  transition: 0.5s;

  .thumb {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    display: flex;

    li {
      list-style: none;
      display: inline-block;
      margin: 0 20px;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        transform: translateY(-15px);
      }

      img {
        max-width: 40px;
      }
    }
  }

  .sci {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    li {
      list-style: none;

      a {
        display: inline-block;
        filter: invert(1);
        margin: 5px 0;
        transform: scale(0.6);
      }
    }
  }

  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      position: relative;
      max-width: 80px;
    }

    ul {
      position: relative;
      display: flex;

      li {
        list-style: none;

        a {
          display: inline-block;
          color: #fff;
          font-weight: 400;
          margin-left: 40px;
          text-decoration: none;
        }
      }
    }
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .textBox {
    position: relative;
    max-width: 600px;

    h2 {
      color: #fff;
      font-size: 4em;
      line-height: 1.5em;
      font-weight: 900;
      text-transform: uppercase;

      span {
        font-size: 2em;
      }
    }

    p {
      color: #fff;
    }

    a {
      display: inline-block;
      margin-top: 20px;
      padding: 8px 20px;
      background: #fff;
      color: #111;
      border-radius: 40px;
      font-weight: 800;
      letter-spacing: 1px;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  .imgBox {
    width: 600px;
    display: flex;
    padding-right: 50px;
    margin-top: 50px;
    justify-content: flex-end;

    img {
      max-width: 260px;
    }
  }
`;

const LandingPage = () => {
  const imageEl = useRef(null);
  const colorEl = useRef(null);

  const imgSlider = (anyting) => {
    console.log(imageEl.current.src);
    imageEl.current.src = anyting;
  };

  const changeBgColor = (color) => {
    console.log(colorEl.current.style);
    colorEl.current.style.background = color;
  };

  return (
    <Section ref={colorEl}>
      <header>
        <Link>
          <img src={logo} alt="" />
        </Link>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Products</Link>
          </li>
          <li>
            <Link>what's new</Link>
          </li>
          <li>
            <Link>Newsletter</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </header>
      <Content>
        <div className="textBox">
          <h2>
            That's What
            <br />
            <span>I like</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel a, ipsa
            illo repellendus voluptates qui itaque aspernatur doloremque
            voluptatum voluptas tenetur quae iure nam ratione officia eveniet
            culpa, ab ut.
          </p>
          <Link>View All Products</Link>
        </div>
        <div className="imgBox">
          <img ref={imageEl} src={imageOne} alt="" />
        </div>
      </Content>
      <ul className="thumb">
        <li>
          <img
            src={imageOne}
            alt=""
            onClick={
              (() => imgSlider(imageOne), () => changeBgColor("#0062be"))
            }
          />
        </li>
        <li>
          <img src={imageTwo} alt="" onClick={() => imgSlider(imageTwo)} />
        </li>
        <li>
          <img
            src={imageThree}
            alt=""
            onClick={
              (() => imgSlider(imageThree), () => changeBgColor("#1e1e1e"))
            }
          />
        </li>
      </ul>
      <ul className="sci">
        <li>
          <Link>
            <img src={image1} alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={image2} alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={image3} alt="" />
          </Link>
        </li>
      </ul>
    </Section>
  );
};

export default LandingPage;
