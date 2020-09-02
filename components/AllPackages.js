import useSWR from 'swr'
import { gql } from 'graphql-request'
import { graphQLClient } from '../utils/graphql-client'
import LoadingSpinner from './LoadingSpinner'

import formatNumber from '../utils/formatNumber'

const fetcher = async query => await graphQLClient.request(query)

function AllPackages () {
  const { data, error } = useSWR(
    gql`
      {
        allPackages {
          data {
            name
            category
            language
            git_repo
            git_stars
            excerpt
            logo
            size
            size_format
            size_compression
          }
        }
      }
    `,
    fetcher
  )

  if (error) return <div>failed to load</div>
  return (
    <div className='min-w-full'>
      <section className='text-gray-700 body-font'>
        <div className='py-24 mx-auto max-w-7xlpx-5'>
          <div className='flex flex-wrap w-full mb-20'>
            <div className='w-full mb-6 lg:w-1/2 lg:mb-0'>
              <h1 className='mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font'>
                Browse all packages
              </h1>
              <div className='w-20 h-1 bg-indigo-500 rounded' />
            </div>
            <p className='w-full text-base leading-relaxed lg:w-1/2'>
              {/*  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag. */}
            </p>
          </div>

          {data ? (
            <div className='flex flex-wrap -m-4 AllPackages'>
              {data.allPackages.data.map(node => (
                <div
                  key={node._id}
                  className='p-4 xl:w-1/3 md:w-1/2 h-full SinglePackage '
                >
                  <div className='bg-gray-900 rounded-lg'>
                    <div className='relative z-10 p-4 rounded-lg shadow-xl'>
                      <div className='absolute inset-0 border-2 border-blue-700 rounded-lg pointer-events-none flex flex-col' />
                      <div className='absolute inset-x-0 top-0 transform translate-y-px '>
                        <div className='flex justify-center transform -translate-y-1/2'>
                          <span className='inline-flex px-4 py-1 text-sm font-semibold tracking-wider text-white uppercase bg-blue-700 rounded-full leading-5'>
                            {node.language}
                          </span>
                        </div>
                      </div>
                      <div className='flex-shrink-0'>
                        <img
                          className='h-48 w-full object-cover mx-auto my-6 bg-white rounded shadow'
                          src={node.logo}
                          alt={node.name}
                        />
                      </div>
                      <div className=''>
                        <h3 className='font-mono text-xs font-light text-gray-400 uppercase'>
                          {node.category}
                        </h3>
                        <h2 className='text-lg font-medium text-gray-100 mb-4s'>
                          {node.name}
                        </h2>
                        <p className='tracking-tight text-gray-300 text-md leading-5'>
                          {node.excerpt}
                        </p>

                        <div className='flex flex-wrap items-center justify-between mt-2'>
                          <a
                            href={node.git_repo}
                            target='_blank'
                            rel='noreferrer noopener'
                            className='inline-flex items-center text-blue-500 md:mb-2 lg:mb-0'
                          >
                            Learn More
                            <svg
                              className='w-4 h-4 ml-2'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              stroke-width='2'
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <path d='M5 12h14' />
                              <path d='M12 5l7 7-7 7' />
                            </svg>
                          </a>
                          <div className='items-center'>
                            <span className='inline-flex items-center py-1 ml-auto mr-3 text-sm leading-none text-gray-300 lg:ml-auto md:ml-0 GitStars'>
                              <svg
                                viewBox='0 0 20 20'
                                stroke-width='2'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                stroke='currentColor'
                                className='w-4 h-4 mr-1'
                              >
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                              </svg>
                              {formatNumber(node.git_stars)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </section>
    </div>
  )
}

export default AllPackages
