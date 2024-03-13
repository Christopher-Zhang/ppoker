import {Rank, Suit} from './types';

interface RevealedCard {
    rank: Rank,
    suit: Suit
}
type ConcealedCard = null;
type Card = RevealedCard | ConcealedCard;

type Hand = [Card, Card];
type River = [Card,Card,Card,Card,Card]

