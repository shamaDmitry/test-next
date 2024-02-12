'use client';
import userService from '@/services/userService';
import React, { useEffect } from 'react';

export default function Aside() {
  useEffect(() => {
    userService.getInfo().then(res => {
      console.log('res', ...res);
    });

    return () => {};
  }, []);

  return <div>Aside</div>;
}
