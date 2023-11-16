'use client';

import React, { useEffect, useState } from 'react';
import Cities from '@/src/components/Cities';
import { Card, Divider, Subtitle, Text } from '@tremor/react';

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-t from-[#75C068] to-[#75C068] p-10 flex flex-col justify-center items-center">
      <Card
        style={{ backgroundColor: '#D6F0FE', border: '1px solid #D6F0FE' }}
        className="max-w-3xl mx-auto"
      >
        <Text className="text-8xl	 font-bold text-center mb-10">Sales</Text>
        <Subtitle className="text-xl text-center">Lorem Ispun</Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-r from-[#D6F0FE] to-[#D6F0FE]">
          <Cities />
        </Card>
      </Card>
    </main>
  );
};

export default Home;
