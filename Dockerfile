FROM public.ecr.aws/lambda/nodejs:18

# 루트 권한으로 모든 파일을 복사합니다.
USER root

# 패키지 파일을 복사하고 의존성을 설치합니다.
COPY package*.json .
RUN npm install

# 빌드된 파일을 추가합니다.
ADD dist ./dist

# 컨테이너가 시작될 때 실행할 명령을 지정합니다.
CMD ["dist/lambda.handler"]

