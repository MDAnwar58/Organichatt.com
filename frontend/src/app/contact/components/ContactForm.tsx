import React from 'react'
import { Button, Card, CardBody } from '@nextui-org/react';

export default function ContactForm() {
  return (
    <div className="lg:w-7/12 w-full">
      <Card>
        <CardBody className="p-5">
          <h3 className="text-center text-xl font-semibold pb-5">Contact US</h3>
          <form action="">
            <input
              type="text"
              className="w-full rounded-md px-5 mb-3 focus:ring-green-300"
              placeholder="Enter Your Name"
            />
            <div className="grid grid-cols-2 gap-5">
              <input
                type="email"
                className="w-full rounded-md px-5 mb-3 focus:ring-green-300"
                placeholder="Enter Your Email"
              />
              <input
                type="text"
                className="w-full rounded-md px-5 mb-3 focus:ring-green-300"
                placeholder="Enter Your Phone"
              />
            </div>
            <input
              type="text"
              className="w-full rounded-md px-5 mb-3 focus:ring-green-300"
              placeholder="Subjects"
            />
            <textarea
              className="w-full rounded-md p-5 mb-3 focus:ring-green-300"
              rows={10}
            ></textarea>
            <div className="text-end">
              <Button
                color="success"
                className="text-white text-xl font-semibold"
              >
                Send
              </Button>
            </div>
          </form>
        </CardBody>
      </Card> 
    </div>
  );
}
