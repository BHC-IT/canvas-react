import * as React from 'react';
import CSS from 'csstype';

export interface CanvasProps {
	id?: string
	getContext?: (_1: CanvasRenderingContext2D) => void,
	height?: number,
	width?: number,
	style?: CSS.Properties,
}

export function Canvas({ id, getContext, width, height, style } : CanvasProps) {

	const _id = id ?? "canvas";

	const [_, setContext] = React.useState<CanvasRenderingContext2D | null>(null);

	React.useEffect(() => {
		const canvas : HTMLCanvasElement = document.getElementById(_id) as HTMLCanvasElement;
		const ctx = canvas.getContext('2d');

		setContext(ctx);
		getContext?.(ctx);
	}, []);

	return <canvas width={width} height={height} style={style} id={_id} />
};


export default Canvas
