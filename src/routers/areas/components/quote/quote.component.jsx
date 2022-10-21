import React from "react";

import { QuoteContainer } from './quote.style';

const quotes = {
    one: `Opportunities don't happen, you create them — Chris Grosser`,
    two: `Success is steady progress toward one’s personal goals. — Jim Rohn`,
    three: `We Are What We Repeatedly Do. – Aristotle`,
}

const Quote = ({ slide }) => {
    return (
        <>
            {
                slide && quotes[slide] ? <QuoteContainer>{quotes[slide]}</QuoteContainer> : null
            }
        </>
    )
}

export default Quote;