import { Controller, useFormContext } from 'react-hook-form';
import { Group, Text } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import '@mantine/dropzone/styles.css';
import { AddSchema } from '@schemas/add.schema';



export default function ImagesStep() {
  const { control } = useFormContext<AddSchema>();

  return (
    <div className='w-1/2'>
      <Controller
      name='images'
      control={control}
      render={({ field }) => {
        return (
          <Dropzone
            {...field}
            onDrop={(files) => {
              field.onChange(files);
            }}
            onReject={(_) => {}}
            maxSize={5 * 1024 ** 2}
            accept={['image/jpeg']}
          >
            <Group
              justify='center'
              gap='xl'
              mih={220}
              style={{ pointerEvents: 'none' }}
            >
              <div className='flex flex-col justify-center items-center'>
                <Text size='xl' inline>
                  Drag images here or click to select files
                </Text>
                <Text size='sm' c='dimmed' inline mt={7}>
                  Attach as many files as you like, each file should not exceed
                  5mb
                </Text>
              </div>
            </Group>
          </Dropzone>
        );
      }}
    />
    </div>
  );
}
