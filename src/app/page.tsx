"use client";

import { useState } from "react";
import TinderCard from "react-tinder-card";

export default function Home() {
  const [lastDirection, setLastDirection] = useState<string>();

  const swiped = (direction: string, nameToDelete: string) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name: string) => {
    // console.log(name + ' left the screen!')
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <div className="stack">
              {"QWERTYUIOPASDFGHJKLZXCVBNM".split("").map((name) => (
                <TinderCard
                  className="swipe"
                  key={name}
                  flickOnSwipe
                  onSwipe={(dir) => swiped(dir, name)}
                  onCardLeftScreen={() => outOfFrame(name)}
                >
                  <div
                    key={name}
                    className="card bg-base-100 w-11/12 shadow-xl"
                  >
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        <b>{name}</b> : Shoes!
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                  </div>
                </TinderCard>
              ))}
            </div>
          </div>
        </div>
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </main>
  );
}
