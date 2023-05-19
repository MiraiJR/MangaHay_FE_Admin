/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SlideComic.sass';
import { CardSlideHome } from "./Slide/CardSlide";
import { Container } from "@mui/material";

const origin_url_be = 'http://localhost:3000';

export class SlideComic extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            images: [],
        };
    }

    async componentDidMount() {
        const query = `
        query {
            getSlideImages {
              id,
              link_image
            }
          }`;

        await fetch(`${origin_url_be}/graphql`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query
            })
        }).then(async (response) => {
            const json_response = await response.json();

            this.setState({
                images: json_response.data.getSlideImages,
            });
        })
    }

    render() {
        return (
            <Container >
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                >
                    {this.state.images && this.state.images.map((ele: any) => (
                        <SwiperSlide key={ele.id}>
                            <CardSlideHome image={ele} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        );
    }
}