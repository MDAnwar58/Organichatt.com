import { Divider, Link } from '@nextui-org/react';
import React from 'react'

export default function ContactInformation() {
  return (
    <div className="lg:w-5/12 w-full lg:pb-0 pb-10 lg:px-0 px-3">
      <h2 className=" text-2xl font-bold pb-3">
        Getting in contact with Khaas Food Ltd. is super easy! Follow any one of
        the steps to reach us
      </h2>
      <Divider />
      <h4 className="pt-3 text-xl font-bold">Facebook Messenger</h4>
      <p className="pb-3">
        Send us a message at
        <Link
          href="/"
          isExternal
          className="text-blue-500 hover:text-green-300 mx-1"
        >
          fb.me/khaasfood
        </Link>
        and we will come in contact with you shortly.
      </p>
      <Divider />
      <h4 className="pt-3 text-xl font-bold">Phone Call</h4>
      <p className="mt-1">Call us at 09612002255 and you will get us easily!</p>
      <h4 className="pt-3 text-xl font-bold">Email us</h4>
      <p>You can email us to any of the following addresses:</p>
      <b className="text-green-400">customercare@khaasfood.com</b>
      <br />
      <b className="text-green-400">career@khaasfood.com</b>
      <Divider className="mt-3" />
      <h4 className="pt-3 text-xl font-bold">Khaas Food Official FB Group</h4>
      <p className="mt-3">
        You can join our community and be a part of Khaas Food Family –
      </p>
      <Link
        href="www.facebook.com/groups/khaasfood"
        isExternal
        className="text-blue-500 hover:text-green-300"
      >
        www.facebook.com/groups/khaasfood
      </Link>
      <Divider className="mt-3" />
    </div>
  );
}
