/**
 * Sleep: 지정한 시간만큼 대기 (비동기)
 */
export function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
