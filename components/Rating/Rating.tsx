import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import RatingStar from "../../public/rating-star.svg"
import style from "./Rating.module.css"
import classnames from "classnames"
import { useState, useEffect, KeyboardEvent } from "react"
interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean,
    rating: number,
    setRating?: (rating: number) => void
}

export const Rating = ({ isEditable = false, rating, setRating, className, ...otherProps }: RatingProps): JSX.Element => {
    const [chosenRating, setChosenRating] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        handleChosenRating(rating)
    }, [rating])

    const handleChosenRating = (currentRating: number) => {
        const array = chosenRating.map((element: JSX.Element, index: number) => {
            return <span
                className={classnames(style.stars, {
                    [style.editable]: isEditable
                })}
                onMouseMove={() => handleChangeRatingMouse(index + 1)}
                onMouseLeave={() => handleChangeRatingMouse(rating)}
                onClick={() => handleChangeRatingClick(index + 1)}
            >
                <RatingStar className={classnames({
                    [style.rated]: index < currentRating,
                })} key={element + "index"}
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(event: KeyboardEvent<SVGAElement>) => handleChangeRatingKeyDown(index + 1, event)}
                />
            </span>
        })
        setChosenRating(array);
    }
    const handleChangeRatingMouse = (countingStar: number): void => {
        if (!isEditable) {
            return
        }
        handleChosenRating(countingStar)
    }
    const handleChangeRatingClick = (countingStar: number): void => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(countingStar)
    }
    const handleChangeRatingKeyDown = (countingStar: number, event: KeyboardEvent<SVGAElement>): void => {
        if (!isEditable && event.code !== "space") {
            return
        }
        handleChosenRating(countingStar)
    }

    return <div {...otherProps}>
        {chosenRating.map((element: JSX.Element, index: number) => {
            return element
        })}
    </div>
}