import React from 'react';

const Header = () => {
    return (
      <div>
        hellow word!
        {import.meta.env.VITE_API_URL}
      </div>
    );
};

export default Header;