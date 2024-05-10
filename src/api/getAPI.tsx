import database from './database.json'

interface ApiResponse<T> {
  response: {
    data: T
  }
}

async function fetchData<T>(
  url: string,
  body: object,
  options: object,
  dummyData: T
): Promise<ApiResponse<T>> {
  await new Promise((resolve) => setTimeout(resolve, 1))
  return {
    response: {
      data: dummyData,
    },
  }
}

export function getSections(
  url: string,
  body: object,
  options: object
): Promise<ApiResponse<typeof database.SECTIONS>> {
  return fetchData(url, body, options, database.SECTIONS)
}

export function getUserInfo(
  url: string,
  body: object,
  options: object
): Promise<ApiResponse<typeof database.USER_INFO>> {
  return fetchData(url, body, options, database.USER_INFO)
}

export function getProjectBrief(
  url: string,
  body: object,
  options: object
): Promise<ApiResponse<typeof database.PROJECT_BRIEF>> {
  return fetchData(url, body, options, database.PROJECT_BRIEF)
}

export function getBlogBrief(
  url: string,
  body: object,
  options: object
): Promise<ApiResponse<typeof database.BLOG_BRIEF>> {
  return fetchData(url, body, options, database.BLOG_BRIEF)
}

export function getResume(
  url: string,
  body: object,
  options: object
): Promise<ApiResponse<typeof database.RESUME>> {
  return fetchData(url, body, options, database.RESUME)
}

export function getBlogs(
  url: string,
  body: object,
  options: object
): Promise<ApiResponse<typeof database.BLOGS_ALL>> {
  return fetchData(url, body, options, database.BLOGS_ALL)
}
