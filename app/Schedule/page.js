import Hero from "../components/Hero";
import Card from "./(components)/card/card";

export default function Schedule() {
  return (
    <>
    <Hero title="See The Doctor's Schedule"/>
        <div className="flex justify-center mt-12 items-center">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2  items-center rounded-md">
        <div>
          <Card abc="umair" time="1PM to 4Pm" fee="2000"/>
        </div>
        <div>
          <Card abc="Ahmad"  time="3PM to 6Pm" fee="1500"/>
        </div>
        <div>
          <Card abc="Ali"  time="6PM to 9Pm" fee="3000"/>
        </div>
        <div>
          <Card abc="Ali"  time="6PM to 9Pm" fee="3000"/>
        </div>
        <div>
          <Card abc="Ali"  time="6PM to 9Pm" fee="3000"/>
        </div>
        <div>
          <Card abc="Ali"  time="6PM to 9Pm" fee="3000"/>
        </div>
        <div>
          <Card abc="Ali"  time="6PM to 9Pm" fee="3000"/>
        </div>
          <div>
            <Card abc="Ali"  time="6PM to 9Pm" fee="3000"/>
          </div>
      </div>
    </div>
    </>

  );
}
