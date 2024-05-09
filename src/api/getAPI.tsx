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
): Promise<ApiResponse<typeof database.DUMMY_SECTIONS>> {
  return fetchData(url, body, options, database.DUMMY_SECTIONS)
}

export function getUserInfo(
  url: string,
  body: object,
  options: object
): Promise<ApiResponse<typeof database.DUMMY_USER_INFO>> {
  return fetchData(url, body, options, database.DUMMY_USER_INFO)
}

export function getProjectBrief(
  url: string,
  body: object,
  options: object
): Promise<ApiResponse<typeof database.DUMMY_PROJECT_BRIEF>> {
  return fetchData(url, body, options, database.DUMMY_PROJECT_BRIEF)
}

export function getBlogBrief(
  url: string,
  body: object,
  options: object
): Promise<ApiResponse<typeof database.DUMMY_BLOG_BRIEF>> {
  return fetchData(url, body, options, database.DUMMY_BLOG_BRIEF)
}

export function getResume(
  url: string,
  body: object,
  options: object
): Promise<ApiResponse<typeof database.DUMMY_RESUME>> {
  return fetchData(url, body, options, database.DUMMY_RESUME)
}

export function getBlogs(
  url: string,
  body: object,
  options: object
): Promise<ApiResponse<typeof database.DUMMY_BLOGS_ALL>> {
  return fetchData(url, body, options, database.DUMMY_BLOGS_ALL)
}
